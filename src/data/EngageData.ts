import { IconType } from "react-icons";
import { FaBalanceScale, FaProjectDiagram, FaSearchDollar, FaTasks } from "react-icons/fa";
import {
  FaCalculator,
  FaChartPie,
  FaChartLine,
  FaFileInvoice,


  FaClipboardCheck,

  FaLightbulb,

} from "react-icons/fa6";

interface Product {
  id: number;
  icon: IconType;
  title: string;
}

export const engageData: Product[] = [
  {
    id: 1,
    title: "Planner",
    icon: FaCalculator,
  },
  {
    id: 2,
    title: "Pie Chart",
    icon: FaChartPie,
  },
  {
    id: 3,
    title: "Performance Trends",
    icon: FaChartLine,
  },
  {
    id: 4,
    title: "Invoicing",
    icon: FaFileInvoice,
  },
  {
    id: 5,
    title: "Profitability",
    icon: FaBalanceScale,
  },
  {
    id: 6,
    title: "Project Flow",
    icon: FaProjectDiagram,
  },
  {
    id: 7,
    title: "Audit Checklist",
    icon: FaClipboardCheck,
  },
  {
    id: 8,
    title: "Revenue Insights",
    icon: FaSearchDollar,
  },
  {
    id: 9,
    title: "Smart Ideas",
    icon: FaLightbulb,
  },
  {
    id: 10,
    title: "Task Analyzer",
    icon: FaTasks,
  },
];
