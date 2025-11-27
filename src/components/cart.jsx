import { useState } from "react";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  removefromCart, addquantity, decreasequantity } from "@/redux/cartSlice";


export const Cart = () => {
  const cartitems = useSelector((state) => state.cart)
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();


  const removefromcart = (id) => {
    dispatch(removefromCart(id))
  }
  const incrementquanitity = (id) => {
    dispatch(addquantity(id))
  }
  const decrementquanitity = (id) => {
    dispatch(decreasequantity(id))
  }


  const totalItems = cartitems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartitems.reduce((sum, item) => sum + item.product.price *item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen} className="transition-all duration-500 ease-in">
      <SheetTrigger asChild>
        <Button
          className="relative bg-transparent transition-all duration-300 "
        >
          <ShoppingCart className="h-10 w-10 text-white hover:text-black" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-[hsl(var(--cart-badge))] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg flex flex-col p-0">
        <SheetHeader className="px-6 pt-6 pb-4">
          <SheetTitle className="flex items-center justify-between text-2xl">
            🍕 Your Order
            <span className="text-sm text-muted-foreground font-normal">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </span>
          </SheetTitle>
        </SheetHeader>

        <Separator />

        <ScrollArea className="flex-1 px-6 overflow-visible overflow-y-auto">

          {cartitems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <ShoppingCart className="h-16 w-16 text-muted-foreground/50 mb-4" />
              <p className="text-lg font-medium text-muted-foreground">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mt-2">Add some delicious pizzas!</p>
            </div>
          ) : (
            <div className="space-y-4 py-4 ">
              {cartitems.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-4 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow duration-300"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1 min-w-0">
                                    <h3 className="font-medium text-sm mb-1 truncate">{item.product.name}</h3>
                    <p className="text-lg font-bold text-primary">
                      Rs{item.product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => decrementquanitity(item._id)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => incrementquanitity(item._id)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => removefromcart(item._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {cartitems.length > 0 && (
          <>
            <Separator />
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold text-2xl text-primary">
                  Rs{subtotal.toFixed(2)}
                </span>
              </div>
              <Link to={'/checkout'}><Button onClick={() => setIsOpen(!isOpen)} className="w-full h-12 text-base font-semibold" size="lg">
                Place Order 🍕
              </Button></Link>
              <p className="text-xs text-center text-muted-foreground">
                Shipping and taxes calculated at checkout
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
