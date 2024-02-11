'use client'

import { CopyIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {useAppStore} from '../store/store'
import { useUser } from "@clerk/nextjs"
import { deleteObject, ref } from "firebase/storage"
import { db, storage } from "@/firebase"
import { deleteDoc, doc } from "firebase/firestore"
import  toast , {Toaster} from "react-hot-toast";


export function DeleteModal() {
    const {user} = useUser()

    const [isDeleteModalOpen , setIsDeleteModalOpen , fileId , setFileId] = 
     useAppStore((state) => [
         
    state.isDeleteModalOpen,
    state.setIsDeleteModalOpen,
    state.fileId,
    state.setFileId, 

]);


async function deleteFile() {
    if(!user ||  !fileId) return;

    const filRef = ref(storage , `users/${user.id}/files/${fileId}`);

    const toastId = toast.loading("Yeaa, Deleting O_o");

    try{

      
    deleteObject(filRef)
    .then(async () => {
     
      deleteDoc(doc(db , 'users' , user.id , 'files' , fileId)).then(() => {
         
      });
      
      })
        .finally(() => {
             
            setIsDeleteModalOpen(false);
            toast.success("Deletion Successfull :p" , {
              id : toastId,
          })
      });

    } catch (error) {
      alert('Uh-OHH an error occured we will be back:))');
      setIsDeleteModalOpen(false);
          
    };

}

  return (
    <Dialog
    open={isDeleteModalOpen}
    onOpenChange={(isOpen) => {
        setIsDeleteModalOpen(isOpen);
    }}
    >

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you Sure u wanna &apos;DEL&apos;</DialogTitle>
          <DialogDescription>
This action cannot be undone . <br /><br /> This will permanently delete your file!
      </DialogDescription>
        </DialogHeader>
                    
    
          <div className="flex space-x-2 py-3">

                    <Button 
                    size="sm"
                    className="px-3 flex-1"
                    variant={"ghost"}
                    onClick={() => setIsDeleteModalOpen(false)} 
                    >
                    <span className="sr-only">Cancel</span> 
                    <span>Cancel</span>
                    </Button>
                    
                    <Button
                    type="submit"
                    size="sm"
                    className="px-3 flex-1"
                    onClick={() => deleteFile()}
                    >
                    <span className="sr-only">Delete</span>
                     <span>Delete</span>
                    </Button>
                   
                </div>
            </DialogContent>
 </Dialog>
);
}
