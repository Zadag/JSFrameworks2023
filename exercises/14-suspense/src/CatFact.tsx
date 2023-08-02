import { useState, useEffect } from "react";
import axios from "axios";
// Import something here
import useSWR from "swr";

const fetcher = (url: string) => axios(url).then((res) => res.data.fact);

function CatFact() {
  /**
   * useSWR will return an object with the key "data", which is the fact that is returned in the fetcher function above.
   */
  const { data } = useSWR("https://catfact.ninja/fact", fetcher, {
    suspense: true,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
  });
  /**
   * Changed from "fact" in state to "data" returned from useSWR above
   */
  return <blockquote>{data}</blockquote>;
}

export default CatFact;
