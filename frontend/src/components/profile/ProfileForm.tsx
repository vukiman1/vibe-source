"use client";

import { useUserStore } from "@/stores";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
} from "@/components/ui";
import { DEFAULT_AVATAR } from "@/constants";
import { Coins, CreditCard, History, Settings } from "lucide-react";

export function ProfileForm() {
  // const t = useTranslations("common");
  const { user } = useUserStore();

  return (
    <div className="grid gap-6 md:grid-cols-12 max-w-6xl mx-auto">
      {/* Sidebar / User Info Card */}
      <div className="md:col-span-4 lg:col-span-3 space-y-6">
        <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-b from-background to-muted/20">
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="relative mb-4 group cursor-pointer">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-75 blur transition duration-200 group-hover:opacity-100" />
              <Avatar className="h-32 w-32 border-4 border-background relative">
                <AvatarImage
                  src={user?.avatar || DEFAULT_AVATAR}
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl bg-muted">
                  {user?.name?.[0]?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
            </div>

            <h2 className="text-xl font-bold mt-2">{user?.name || "User"}</h2>
            <p className="text-sm text-muted-foreground break-all px-4">
              {user?.email}
            </p>

            <div className="mt-6 w-full space-y-2">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Balance Card */}
        <Card className="border-none shadow-md bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/20 dark:to-purple-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Wallet Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${user?.balance?.toFixed(2) || "0.00"}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Available for withdrawal
            </p>
          </CardContent>
        </Card>

        {/* Tokens Card */}
        <Card className="border-none shadow-md bg-gradient-to-br from-amber-500/10 to-orange-500/10 dark:from-amber-500/20 dark:to-orange-500/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Coins className="h-4 w-4" />
              Vibe Tokens
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold flex items-center gap-1">
              {user?.token?.toLocaleString() || "0"}
              <span className="text-xs font-normal text-muted-foreground self-end mb-1">
                VT
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Use for premium assets
            </p>
            <Button
              size="sm"
              className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white border-none"
            >
              Buy Tokens
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Area */}
      <div className="md:col-span-8 lg:col-span-9 space-y-6">
        {/* Recent Activity */}
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Mock Data */}
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">
                        {" "}
                        purchased &quot;Premium UI Kit&quot;
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="font-mono">
                    - $24.00
                  </Badge>
                </div>
              ))}

              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Coins className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Top-up Tokens</p>
                    <p className="text-xs text-muted-foreground">Yesterday</p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="text-green-600 border-green-200 dark:border-green-800 font-mono"
                >
                  + 500 VT
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
