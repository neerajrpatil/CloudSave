import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import { UserButton  , SignedOut  , SignInButton} from "@clerk/nextjs";
import { ThemeTogggler } from './themeToggler';
import yea from './yy.png'

function Header() {
  return (
        <header className='flex items-center justify-between '>

                <Link href='/' className='flex items-center space-x-2 '>
                    <div className='bg-blue-800 p-1 w-fit'>
                        <Image src={ yea } 
                        alt="yee" 
                        width={40}
                         height={40}
                          /> 
                    </div>
                        <h1 className='font-bold  text-2xl '> MeghaDoot Vault </h1>
                </Link>

                
                <div className='px-5 flex space-x-2 items-center'>
                   
                    <ThemeTogggler/>
                    <UserButton afterSignOutUrl="/" /> 
                     
                    {/* makes sure tht after signout user is headed to this home page */}

                    <SignedOut>
                    <SignInButton afterSignInUrl='/dashboard' mode='modal' /> 
                    {/* mode take cares of laoding the login page here istslef by reducing background homepge's opacity yeee */}
                    {/* after clicked on sign in button itll take to dash nd indirectly to AUTH PAGE and then dash  */}
                    </SignedOut>
                    {/* all thsse above thre wil provide us the hiigher order compo tht we can use for ur ref */}

                </div>
    

         </header> 
 );
    
}

export default Header