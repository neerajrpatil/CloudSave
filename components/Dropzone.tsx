'use client'

import DropzoneCompo from 'react-dropzone';
import {cn} from '../lib/utils'
import { AsteriskIcon } from 'lucide-react';
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import {db  , storage} from '../firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import toast , {Toaster} from "react-hot-toast";


function Dropzone() {
    // maxFileSize = 100mb
    const maxiiSize = 524288000;

    const [Loading , setLoading] = useState(false);
    const { isLoaded, isSignedIn, user  } = useUser();
  
       

    const onDrop = (acceptedFiles: File[]) => {
       acceptedFiles.forEach(file => { 
          const reader = new FileReader();

          const toastId = toast.loading("Yeaa, Uploading :)");
          toast.success("Upload Successfull :p" , {
            id : toastId,
        })
          reader.onabort = () => console.log('file reading was aborted');
          reader.onerror = () => console.log('file reading was failed ');

          reader.onload = async () => {
            await uploadPost(file);

          }
          reader.readAsArrayBuffer(file);
       })
    };;

    const uploadPost = async (selectedFile : File ) => {
        if (!user) return;
        // if no user return doing this cz shud check uid
        if(Loading) return;
        // this above if is for like if user spams the same file by usignsppaming on yhe button idk wanna upload the same file 10 times if its loading and u 
        // try again to uplaod repaeatedly dame file then just retuen astee
        setLoading(true);

         

        // do wht needs to be done nowonn

        // add a document to this location ->  users/user12345/files
        const docRef = await addDoc(collection(db , "users" , user.id , 
        "files") , {
           userId : user.id, 
           filename : selectedFile.name,
           fullName : user.fullName,
           profileImg : user.imageUrl,
           timestamp : serverTimestamp(),
           type: selectedFile.type,
           size : selectedFile.size,
           
           
        }) ;

        const imageRef = ref(storage,`users/${user.id}/files/${docRef.id}`);
        
       uploadBytes(imageRef ,  selectedFile).then( async(snapshot) => {
           const  downloadURL = await getDownloadURL(imageRef);
           
           await updateDoc(doc(db, "users" , user.id , "files" , docRef.id) , {
                downloadURL : downloadURL , 
           });
        });

// above fucn will use the path setted above and will try to uplaod the files to the server 
// also gets the urlofDowload


        setLoading(false); 
    };


  return (
 
    <DropzoneCompo 
    minSize={0} 
    maxSize={maxiiSize} 
    onDrop={onDrop}
    >
      {({
        getRootProps,
         getInputProps ,
          isDragActive, 
          isDragReject,
          fileRejections ,

    }) => {
        
        const isFileTooLarge = fileRejections.length > 0 
        &&  fileRejections[0].file.size > maxiiSize;

     return(

        <section >
          <div {...getRootProps()} 
          className={cn(
                ' bg-gray-900 w-full flex justify-center border-indigo-300 h-52 items-center p-5 border border-dashed rounded-2xl text-center font-semibold text-base  ' , 
                isDragActive ? 'dark:bg-[#db2777] text-white aniamte-pulse bg-pink-300' 
                : 'bg-#9333ea dark:bg-gray-900 bg-[#d8b4fe] text-blue-900 dark:text-slate-300 lg:text-xl'
          )}
          >
            <input {...getInputProps()} />
            {!isDragActive &&  (
                    <div>   <span className='text-xl font-bold'> &apos;Click&apos; </span>   here to upload File(s)  &nbsp; OR  &nbsp;    <span className='text-xl font-bold'> &apos;Drag-N-Drop&apos; </span> over here!</div>
                    )}
                    {!isDragActive && isDragReject && (
                    <div>Sorry, your file has not been accepted!</div>
                    )}
    
                    {isFileTooLarge && (
                    <div className='text-fragger mt-2'>
                        File too <span className='text-2xl font-bold'>LARGE</span>
                    </div> )}
                    {isDragActive && !isDragReject && (
                    <div>  <span className='text-2xl font-bold'> DROP</span>  here to Upload</div>
                    )}
          </div>
        </section>
      );
    }}

    </DropzoneCompo>
  );
}

export default Dropzone;
