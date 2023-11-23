"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import axios from "axios";
function UsersTable() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://cap-partners-investment.cyclic.app/api/v0/admin/adminapis/get_all_users"
      )
      .then((res) => {
        setUsers(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <></>;
}

export default UsersTable;
