import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  formatAmount,
  formatDateTime,
  getTransactionStatus,
  removeSpecialCharacters,
} from "@/lib/utils";

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table>
      <TableHeader className="bg-[#f9afb]">
        <TableRow>
          <TableHead className="px-2">Transaction</TableHead>
          <TableHead className="px-2">Amount</TableHead>
          <TableHead className="px-2">Status</TableHead>
          <TableHead className="px-2">Date</TableHead>
          <TableHead className="px-2 max-md:hidden">Channel</TableHead>
          <TableHead className="px-2 max-md:hidden">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((t: Transaction) => {
          const status = getTransactionStatus(new Date(t.date));
          const amount = formatAmount(t.amount);

          const isDebit = t.type === "debit";
          const isCredit = t.type === "credit";
          return (
            <TableRow
              key={t.id}
              className={` ${
                isDebit || amount[0] === "-"
                  ? `bg-[#FFFBFA]`
                  : `bg-[#F6FEF9] !border-b-DEFAULT`
              } }`}
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <h1 className="font-bold truncate text-14 text-[#344054]">
                    {removeSpecialCharacters(t.name)}
                  </h1>
                </div>
              </TableCell>
              <TableCell
                className={`pl-2 pr-10 font-bold  ${
                  isDebit || amount[0] === "-"
                    ? `text-[#f04438]`
                    : `text-[#039855]`
                }`}
              >
                {isDebit ? `- ${amount}` : isCredit ? ` amount` : `amount`}
              </TableCell>
              <TableCell className="pl-2 pr-10">{status}</TableCell>
              <TableCell className="pl-2 pr-10 min-w-32 ">
                {formatDateTime(new Date(t.date)).dateTime} 
              </TableCell>
              <TableCell className="pl-2 pr-10">{t.paymentChannel}</TableCell>
              <TableCell className="pl-2 pr-10 max-md:hidden">{t.category}</TableCell>
            </TableRow>
          );
        })}{" "}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
