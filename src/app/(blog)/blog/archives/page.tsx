import { ArchiveItemPost } from "@/types/blog/archives";
import _ from "lodash";
import { FC } from "react";
import Archiveitem from "./components/Archiveitem";
import { fetchData } from "@/utils/fetch";
import { Metadata } from "next";
import ArchivesNotFound from "@/templates/archives-not-found";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "归档 - Hilary Liu's Blog",
    description: "Archives of Hilary Liu's Blog"
}

const Articles: FC = async () => {
    const { data: archives = [] } = await fetchData<{ data: ArchiveItemPost[] }>("/api/notion/archives", {
        method: "GET",
    })
    if (!archives) {
        return <ArchivesNotFound />
    }
    return <div className="pt-20 max-w-2xl mx-auto">
        {
            _.map(archives, a => (
                <Archiveitem title={a.title} last_edited_time={a.last_edited_time} key={a.id} id={a.id} />
            ))
        }
    </div>
}

export default Articles;