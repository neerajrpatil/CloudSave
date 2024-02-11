'use client'


import { Skeleton } from "@/components/ui/skeleton"
import { FileType } from '@/typings'
import React from 'react'
import { Button } from '../ui/button'
import { DataTable } from './table';
import { columns } from './columns';
import {useUser} from "@clerk/nextjs"
import {useState , useEffect} from "react"
import {useCollection} from "react-firebase-hooks/firestore"
import { db } from '@/firebase';
import { collection, query  , orderBy} from 'firebase/firestore';


function TableWrapper(
    {skeletonFiles} : {skeletonFiles : FileType[] })
 {

  const { user } = useUser();
  const [initialFiles , senInitialFiles] =  useState<FileType[]>([])
  const [sort , setSort] = useState<"asc" | "desc">("desc");

  const [docs , loading , err] = useCollection(
    user&& 
    query(
      collection(db , "users" , user.id , "files"),
      orderBy("timestamp" ,sort)
    )
  );

  useEffect(() => {
    if(!docs) return ;
    const files : FileType[] = docs.docs.map(doc => ({
      id: doc.id,
      filename: doc.data().filename || doc.id,
      timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
      fullName: doc.data().fullName,
      downloadURL: doc.data().downloadURL,
      type: doc.data().type,
      size: doc.data().size,
    }))
    senInitialFiles(files);

  } , [docs]);
  

  if(docs?.docs.length === undefined)
   return(
      <div className="flex flex-col">
        <Button variant={'outline'} className="ml-auto w-36 mb-5">
     < Skeleton className='h-5 w-full' />
        </Button>
        <p className='relative -top-4 font-bold bg:pink-400'>
          Loading....
        </p>

        <div className="border rounded-lg">
          <div className="border-b h-12">
          {skeletonFiles.map((file) =>
            <div
            key={file.id}
            className="flex items-center space-x-4 p-5 w-full">
            <Skeleton className="h-12 w-12" />
            <Skeleton className="h-12 w-full" />
            </div>
            )}

          </div>
        </div>
      </div>
  )

  // starts with desec and gives choice of asc too :))

  return (
    <div className="flex flex-col spacr-y-5 pb-10">
          <button className="ml-auto w-fit inline-flex items-center justify-center  p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg relative top-8 group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" 
          onClick={() => {
            setSort(sort== "desc" ? "asc" : "desc")
          }}>
    <span className=" px-5 py-2.5 transition-all  ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 " >
    Sort BY {sort=== "desc" ? "Newest" : "Oldest"}
    </span>
    </button>
    
         {/* <Button className='relative top-24 hover:bg-slate-300' >
           
         </Button> */}
         <DataTable columns={columns} data={initialFiles} />

    </div>

  );
}

export default TableWrapper