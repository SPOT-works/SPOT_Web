import { useQuery } from "@tanstack/react-query";
import {
  getNearbyHistories,
  getHistory,
  getMyHistories,
  getFoundHistories,
} from "./api";
import QUERY_KEY from "@/constants/queryKey";

export const useNearbyHistoriesQuery = (lat: number, lng: number) =>
  useQuery({
    queryKey: [QUERY_KEY.history.NEARBY, lat, lng],
    queryFn: () => getNearbyHistories(lat, lng),
    enabled: !!lat && !!lng,
  });

export const useHistoryQuery = (id: string) =>
  useQuery({
    queryKey: [QUERY_KEY.history.DETAIL, id],
    queryFn: () => getHistory(id),
    enabled: !!id,
  });

export const useMyHistoriesQuery = () =>
  useQuery({
    queryKey: [QUERY_KEY.history.MINE],
    queryFn: getMyHistories,
  });

export const useFoundHistoriesQuery = () =>
  useQuery({
    queryKey: [QUERY_KEY.history.FOUND],
    queryFn: getFoundHistories,
  });
