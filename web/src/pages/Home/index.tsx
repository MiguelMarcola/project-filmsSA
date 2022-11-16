import { LastFilms } from "../../components/LastFilms";
import { Sidebar } from "../../components/Sidebar";
import Banner from "../../assets/images/banner.png"
import { CardFilms } from "../../components/CardFilms";
import { Pagination } from "../../components/Pagination";
import { useState } from "react";

export function Home() {
    const [currentPage, setCurrentPage] = useState(2);

    const onPageChange = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <div className='flex justify-center h-full mr-56 ml-28 my-10'>
            <Sidebar />

            <div className="flex flex-col gap-8 w-full mx-6 ">
                <img src={Banner} className="max-w-full" />

                <CardFilms />
                <div className="flex w-full justify-center">
                    <Pagination totalCountOfRegisters={200} currentPage={currentPage} onPageChange={onPageChange} />
                </div>
            </div>

            <LastFilms />
        </div>
    )
}