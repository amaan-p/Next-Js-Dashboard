import { Suspense } from "react";
import { InvoicesTableSkeleton } from "../../skeletons";
import CustomersTable from "../../customers/table";
import { fetchALLCustomers} from "@/app/lib/data";

export default async function Page(){
    const allCustomers = await fetchALLCustomers();
    return <>
    <main>
    <Suspense  fallback={<InvoicesTableSkeleton />}>
        <CustomersTable customers={allCustomers}/>
      </Suspense>
    </main>
    </>
}