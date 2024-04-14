import { Metadata } from 'next';
import React, { Suspense } from 'react';
import { TableRowSkeleton } from '@/app/ui/skeletons';
import Table from '@/app/ui/customers/table';
import { fetchCustomersPages } from '@/app/lib/data';
import Pagination from '@/app/ui/customers/pagination';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchCustomersPages(query);
  return (
    <>
      <Suspense key={query + currentPage} fallback={<TableRowSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}
