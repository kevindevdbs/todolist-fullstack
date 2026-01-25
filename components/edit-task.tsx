import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { SquarePen } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"


export default function EditTask(){


    return(
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <SquarePen size={18} className="cursor-pointer" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-106.25">
                    <DialogHeader>
                        <DialogTitle>Editar tarefa</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Input id="name-1" name="name" defaultValue="editar tarefa" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Editar</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}