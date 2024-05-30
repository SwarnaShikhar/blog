import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import blogData from "@/data/blogData.json";

type CardProps = React.ComponentProps<typeof Card>

export function Blog({ className, ...props }: CardProps) {
    return (
        <div className="justify-between m-4 md:mx-32 md:gap-4">
            {blogData.map((data) => {
                return (
                    <div key={data.title} className={cn("w-full pt-5", className)} {...props}>
                        <CardHeader>
                            <CardTitle className="text-2xl">{data.title}</CardTitle>
                            <br />
                            <div className="flex gap-1">
                                <div>{data.date}</div>
                                <div>|</div>
                                <div>{data.tech}</div>
                            </div>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className=" flex items-center space-x-4 rounded-md pb-6">
                                <div className="flex space-y-1">
                                    <div className="text-xl">${data.desc}</div>
                                </div>
                            </div>
                        </CardContent>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}