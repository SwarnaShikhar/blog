import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const notifications = [
    {
        title: "Making a design system from scratch",
        subtitle: "12 Feb 2020   |   Design,Pattern",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        title: "Creating pixel perfect icons in Figma",
        subtitle: "12 Feb 2020   |   Design,Pattern",
        desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
]

type CardProps = React.ComponentProps<typeof Card>

export function Post({ className, ...props }: CardProps) {
    return (
        <div className="justify-between m-6 md:flex md:mx-32 md:gap-4">
            {notifications.map((data) => {
                return (
                    <Card key={data.title} className={cn("w-full pt-5", className)} {...props}>
                        <CardHeader>
                            <CardTitle className="text-4xl">{data.title}</CardTitle>
                            <br />
                            <CardDescription className="text-xl">{data.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className=" flex items-center space-x-4 rounded-md pb-6">
                                <div className="flex space-y-1">
                                    <div className="text-xl">${data.desc}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}