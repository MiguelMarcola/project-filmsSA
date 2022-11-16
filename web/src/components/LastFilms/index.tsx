import { Star } from "phosphor-react"

export function LastFilms() {
    return (
        <div className="bg-zinc-800 h-full w-56 flex flex-col items-center fixed right-0 top-0 gap-8 px-4 py-8 mr-1 border-x-[1px] border-x-zinc-600 overflow-y-scroll scrollbar-thumb-zinc-600 scrollbar-track-transparent scrollbar-thin">
            <h1 className="text-white font-medium text-lg">Top Filmes</h1>
            <div className="flex flex-col">
                <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg" />
                <h1 className="text-lg text-white font-medium mt-2">Castle in the Sky</h1>
                <h2 className="text-xs text-white font-normal">2019</h2>
                <div className="flex my-2">
                    <Star size={20} weight="fill" color="#285CE3" />
                    <Star size={20} weight="fill" color="#285CE3" />
                    <Star size={20} weight="fill" color="#285CE3" />
                    <Star size={20} weight="fill" color="#285CE3" />
                    <Star size={20} color="#285CE3" />
                </div>
            </div>
            <div className="flex flex-col">
                <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg" />
                <h1 className="text-lg text-white font-medium mt-2">Castle in the Sky</h1>
                <h2 className="text-xs text-white font-normal">2019</h2>
                <div className="flex my-2">
                    <Star size={20} weight="fill" color="#285CE3" />
                    <Star size={20} weight="fill" color="#285CE3" />
                    <Star size={20} weight="fill" color="#285CE3" />
                    <Star size={20} weight="fill" color="#285CE3" />
                    <Star size={20} color="#285CE3" />
                </div>
            </div>
            <div className="flex flex-col">
                <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg" />
                <h1 className="text-lg text-white font-medium mt-2">Castle in the Sky</h1>
                <h2 className="text-xs text-white font-normal">2019</h2>
                <div className="flex my-2">
                    <Star size={20} weight="fill" color="#285CE3" />
                    <Star size={20} weight="fill" color="#285CE3" />
                    <Star size={20} weight="fill" color="#285CE3" />
                    <Star size={20} weight="fill" color="#285CE3" />
                    <Star size={20} color="#285CE3" />
                </div>
            </div>
        </div>
    )
}