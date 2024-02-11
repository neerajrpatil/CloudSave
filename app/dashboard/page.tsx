import {auth} from '@clerk/nextjs'
// this auth eill give us the user's-ids if we need it by any chance
import {FileType} from "@/typings"
import React from 'react'
import Dropzone from '../../components/Dropzone';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import { Fullscreen } from 'lucide-react';
import TableWrapper from '@/components/table/TableWrapper';

async function dashboard() {
  const {userId } = auth(); 

  const docResults = await getDocs(collection(db, "users", userId!, "files"))
  const skeletonFiles: FileType[] = docResults.docs.map(doc => ({
    id: doc.id,
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadURL: doc.data().downloadURL,
    type: doc.data().type,
    size: doc.data().size,
  }));
  

  return (
    <div className='border-t'>
      {/* DASHBOARD (user is {userId})  */}
      {/* /gives us the userID fetched from the CLERK via 'auth'  */}
       <Dropzone />       

      <section className='container space-y-5  scroll-smooth	'>
        <h2 className='font-bold relative top-8'>All Files</h2>

        <div>
          {/* TableWrapper */}
            <TableWrapper 
                skeletonFiles = {skeletonFiles}
            />
        </div>
      </section>
 </div>
  );
}

export default dashboard;