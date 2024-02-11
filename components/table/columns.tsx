"use client"

import { COLOR_EXTENSION_MAP } from "@/constant"
import { FileType } from "@/typings"
import { SizeIcon } from "@radix-ui/react-icons"
import { ColumnDef } from "@tanstack/react-table"
import { Link } from "lucide-react"
import prettyBytes from "pretty-bytes"
import { FileIcon , defaultStyles  } from 'react-file-icon';

export const columns: ColumnDef<FileType>[] = [
    
  {
      accessorKey: "type",
      header: "type",
      cell: ({ renderValue,...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];
      // imgae/jpeg/png like these extensiosns are gottn using the below code
      // n we're splitting it in above code cz itll be an array of respsonse like [iamge , png]
      return (
      <div className="w-10">
      <FileIcon
      extension={extension}
      labelColor={COLOR_EXTENSION_MAP[extension]}
      // @ts-ignore
      {...defaultStyles [extension]}
      />
      </div>
      );
    },
  },

  {
    accessorKey: "filename",
    header: "Filename",
  },

  {
    accessorKey: "timestamp",
    header: "Date Added",
  },

  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue,...props }) => {
       return <span>{prettyBytes (renderValue() as number)}</span>; },
  },

   { 
    accessorKey: "downloadURL",
     header: "Link", 
    cell: ({ renderValue,...props }) =>( 
    <a
    href={renderValue() as string} target="_blank"
    className="underline text-blue-500 hover:text-blue-600">
       Download 
    </a>)
    }

];




