﻿FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["backend/VerstaOrder/VerstaOrder.csproj", "backend/VerstaOrder/"]
RUN dotnet restore "backend/VerstaOrder/VerstaOrder.csproj"

COPY . .

WORKDIR "/src/backend/VerstaOrder"
RUN dotnet build "VerstaOrder.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "VerstaOrder.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "VerstaOrder.dll"]