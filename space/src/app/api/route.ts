import { NextResponse } from "next/server";
import { INavigationItem } from "@/models/navigation.interface";

export async function GET(): Promise<NextResponse<INavigationItem[]>> {
  return NextResponse.json([
    {
      id: "H0m3",
      section: "home",
    },
    {
      id: "D3st1",
      section: "destination",
    },
    {
      id: "Cr3w",
      section: "crew",
    },
    {
      id: "T3ch",
      section: "technology",
    },
  ]);
}
