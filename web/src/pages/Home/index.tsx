import { LastFilms } from "../../components/LastFilms";
import { Sidebar } from "../../components/Sidebar";
import Banner from "../../assets/images/banner.png"
import { CardFilms } from "../../components/CardFilms";

export function Home() {
    return (
        <div className='flex justify-center h-full mr-56 ml-28 my-10'>
            <Sidebar />

            <div className="flex flex-col gap-8 w-full mx-6 ">
                <img src={Banner} className="max-w-full" />

                <CardFilms />
            </div>

            <LastFilms />
        </div>
    )
}