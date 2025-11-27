import { Package, ShoppingBag, DollarSign, Users } from "lucide-react";
export const adminStats = [
  {
    id: 1,
    action: "Total Products",
    value: 1250,
    description:
      "Monitor the total number of products currently listed in your store inventory to ensure stock consistency and availability.",
    icon: <Package className="w-6 h-6 text-blue-500" />,
  },
  {
    id: 2,
    action: "Total Orders",
    value: 847,
    description:
      "Track the total number of orders placed by customers to analyze daily sales performance and order trends.",
    icon: <ShoppingBag className="w-6 h-6 text-green-500" />,
  },
  {
    id: 3,
    action: "Revenue This Month",
    value: "$12,460",
    description:
      "See total revenue generated this month from all completed and paid customer purchases to measure profitability.",
    icon: <DollarSign className="w-6 h-6 text-yellow-500" />,
  },
  {
    id: 4,
    action: "Total Users",
    value: 2325,
    description:
      "Keep track of the total number of registered users to understand the size and growth of your customer base.",
    icon: <Users className="w-6 h-6 text-purple-500" />,
  },
];