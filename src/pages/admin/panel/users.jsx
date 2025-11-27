import { useEffect, useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table"
import axios from "axios"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog"
import { Label } from "@/components/ui/label"
import Swal from "sweetalert2"


export default function Users() {
  const [users, setisUsers] = useState([])
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formvalues, setformvalues] = useState({
    username: "",
    password: "",
    email: "",
    isAdmin: true,
  })

  const handleinputchange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setformvalues({ ...formvalues, [name]: value })
  }

  const fetchusers = () => {
    axios.get("http://localhost:5000/api/users").then((res) => setisUsers(res.data)).catch((error) => console.log("Error=>", error));
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/create-admin",
        { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formvalues) });
      const data = await response.json();
      if (response.ok) {
        fetchusers();
        setformvalues({
          username: "",
          password: "",
          email: "",
          isAdmin: true,
        });
        setIsDialogOpen(false);
        Swal.fire({ title: "Success", text: data.message || "User added successfully", icon: "success" });
      } else {
        Swal.fire({ title: "Error", text: data.message, icon: "error" });
      }
    }
    catch (error) {
      console.log("Error=>", error)
      Swal.fire({ title: "Error", text: "An error occurred while adding the user.", icon: "error" });
    }
  }




  useEffect(() => {
    fetchusers()
  }, [])
  return (
    <div>
      <h1 className='text-white font-normal text-4xl p-6'>Users</h1>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">email</TableHead>
            <TableHead>username</TableHead>
            <TableHead>password</TableHead>
            <TableHead>Admin</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow key={user._id}>
                <TableCell className="font-medium">{user.email}</TableCell>
                <TableCell className="font-medium">{user.username}</TableCell>
              <TableCell>{"*".repeat(user.password.length)}</TableCell>
                <TableCell>Yes</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">{users.length}</TableCell>
          </TableRow>
        </TableFooter>

      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <form onSubmit={handlesubmit}>
          <DialogTrigger asChild>
            <Button variant="outline" className="m-4">Add User</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add User</DialogTitle>
              <DialogDescription>
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="Username">Username</Label>
                <Input onChange={handleinputchange} name="username" value={formvalues.username} placeholder="Enter username" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="Password">Password</Label>
                <Input onChange={handleinputchange} name="password" value={formvalues.password} placeholder="Enter password" />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="Email">Email</Label>
                <Input onChange={handleinputchange} name="email" value={formvalues.email} placeholder="Enter email" />
              </div>

            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>


        </form>
      </Dialog>


    </div>

  )
}
