import { Link } from "react-router-dom"
import {
    FilmSlate,
    Television,
    GameController,
    Newspaper,
    Trophy,
    Heart,
    Clock
} from "phosphor-react";
import Logo from "../../assets/images/FilmsSA.png"

export function Sidebar() {
    return (
        <div className="bg-zinc-900 h-full w-28 fixed left-0 top-0 flex flex-col border-x-[1px] border-x-zinc-600 items-center gap-8 px-4 py-8">
            <img src={Logo} />

            <div className="w-full h-[1px] bg-gray-300 opacity-40"></div>

            <Link to="/">
                <FilmSlate size={32} color="#FFFFFF" />
            </Link>

            <Link to="/">
                <Television size={32} color="#FFFFFF" />
            </Link>

            <Link to="/">
                <GameController size={32} color="#FFFFFF" />
            </Link>

            <Link to="/">
                <Newspaper size={32} color="#FFFFFF" />
            </Link>

            <Link to="/">
                <Trophy size={32} color="#FFFFFF" />
            </Link>

            <div className="w-full h-[1px] bg-gray-300 opacity-40"></div>

            <Link to="/filmes">
                <Heart size={32} weight="fill" color="#FFFFFF" />
            </Link>

            <Link to="/filmes">
                <Clock size={32} color="#FFFFFF" />
            </Link>
        </div>
    )
}