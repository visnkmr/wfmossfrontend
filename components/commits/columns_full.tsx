'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { Button } from '../../components/ui/button';
// import { Checkbox } from '../../components/ui/checkbox';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '../../components/ui/dropdown-menu';
import React from 'react';
import { DateTime } from 'luxon';
import LetterClamp from '../../src/components/letterclamp';
import '../../styles/committablestyle.css'
import { lofiles } from '../listoffiles';
// export type eCommit = {
//   reponame: string;
//   additions: number;
//   deletions: number;
//   message: string;
//   time:number;
//   commit:string;
// };

// const columns: ColumnDef<eCommit>[] = metadata.map((attribute) => {
// 	return columnHelper.accessor(attribute.id, {
// 		header: attribute.label,
// 		cell: (info) => {
// 			const value = info.getValue();

// 			if (value instanceof Date) {
// 				return value.toUTCString();
// 			}

// 			return value;
// 		},
// 		footer: attribute.label,
// 	});
// });

export const columns_full: ColumnDef<lofiles>[] = [
 
  // {
  //   accessorKey: 'reponame',
  //   header: 'Reponame',
  // },
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={table.getIsAllPageRowsSelected()}
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },

  {
    accessorKey: 'filename',
    header: ({ column }) => {
      return (
        <Button
          // variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Filename
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({
      getValue,
      row: {
        original: { openapi,filename,downloadapi,isfile,ipaddress },
      },
    }) => {
      const rname = getValue()

      return (
        <div className='flex flex-col'>
          
            <a href={`http://${ipaddress}${openapi}`} className={isfile ? '' : 'hidden'}>{`open on tv`}</a>
            <a href={`http://${ipaddress}${openapi}`} className={isfile ? 'hidden' : ''}>{filename}</a>
            <a href={`http://${ipaddress}${downloadapi}`} className={isfile ? '' : 'hidden'}>{filename}</a>
        </div>
        // <div className="text-right">
        //   {original_price_incl_tax !== price && (
        //     <Tooltip
        //       content="The price has been overridden in a price list, that is applicable to this order."
        //       side="top"
        //     >
        //       <p className="cursor-default text-grey-40 line-through">
        //         {formatAmountWithSymbol({
        //           amount: original_price_incl_tax || 0,
        //           currency: order.currency_code,
        //         })}
        //       </p>
        //     </Tooltip>
        //   )}
        //   <p>
        //     {formatAmountWithSymbol({
        //       amount: price || 0,
        //       currency: order.currency_code,
        //     })}
        //   </p>
        // </div>
      )
    },
    
  }
  // ,{
  //   accessorKey: 'additions',
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         // variant='ghost'
  //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  //       >
  //         Additions
  //         <ArrowUpDown className='ml-2 h-4 w-4' />
  //       </Button>
  //     );
  //   },
  // },{
  //   accessorKey: 'deletions',
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         // variant='ghost'
  //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  //       >
  //         Deletions
  //         <ArrowUpDown className='ml-2 h-4 w-4' />
  //       </Button>
  //     );
  //   },
  // }
  ,{
    accessorKey: 'size',
    header: ({ column }) => {
      return (
        <Button
          // variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Size
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({
      getValue,
      row: {
        original: { filesize },
      },
    }) => {
      const rname = getValue()

      return (
        <p>{filesize}</p>

      )
    },
    enableSorting: true,
  //   enableHiding: false,
  },{
    accessorKey: 'time',
    header: ({ column }) => {
      return (
        <Button
          // variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Time
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({
      getValue,
      row: {
        original: { lastmodified },
      },
    }) => {
      const rname = getValue()
      const dateTime = DateTime.fromMillis(parseInt(lastmodified) * 1000); // Convert timestamp to DateTime object
      const utcDateTime = dateTime.toUTC(); // Convert DateTime object to UTC time
      const utcTime = utcDateTime.toFormat('dd MMM yy'); // Format UTC time in ddmmyyhhss format

      return (
          <p>{lastmodified}</p>
      )
    },
    enableSorting: true,
  //   enableHiding: false,
  },
  
  // {
  //   accessorKey: 'deletions',
  //   header: () => <div className='text-right'>Deletions</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue('amount'));
  //     const formatted = new Intl.NumberFormat('en-US', {
  //       style: 'currency',
  //       currency: 'USD',
  //     }).format(amount);

  //     return <div className='text-right font-medium'>{formatted}</div>;
  //   },
  // },
  // {
  //   id: 'actions',
  //   cell: ({ row }) => {
  //     const payment = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button 
  //           // variant='ghost' 
  //           className='h-8 w-4 p-0'>
  //             <span className='sr-only'>Open menu</span>
  //             {/* <MoreHorizontal className='h-4 w-4' /> */}
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align='end'>
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
  // ...
];
