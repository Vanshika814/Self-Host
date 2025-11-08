import { getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

const page = async () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions()); //leveraging the speed of server component by instantly prefecthing 

  return (
  <div className="min-h-screen min-w-screen flex items-center justify-center">
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>loading....</p>}>
        <Client/>
      </Suspense>
    </HydrationBoundary>
    
  </div>
  );
};

export default page;

// it is fast bcz server component has no data atm instead we prefetching