import axios from '@/utils/axios';
// import { ADMIN_API } from '@/utils/constant';
// import { useQuery } from '@tanstack/react-query';
// import { GET_CARGOES, GET_SINGLE_CARGO } from './api.keys';
// import { GetCargoesType, GetShipsType, GetSingleCargoType } from './api.types';

//========================================//
// export const useGetCargoes = (page: number) => {
//   const { data, isLoading } = useQuery({
//     queryKey: [GET_CARGOES, page],
//     queryFn: async (): Promise<GetCargoesType> =>
//       axios
//         .get(ADMIN_API.cargoes, { params: { page } })
//         .then((res) => res?.data),
//   });
//   return {
//     cargos: data?.cargos?.data,
//     isLoading,
//     totalPage: data?.cargos?.last_page,
//   };
// };

// export const useGetSingleCargo = (id: string | string[] | undefined) => {
//   const { data, isLoading } = useQuery({
//     queryKey: [GET_SINGLE_CARGO, id],
//     queryFn: async (): Promise<GetSingleCargoType> =>
//       axios.get(`admin/cargo/${id}/show`).then((res) => res?.data),
//     enabled: Boolean(id),
//   });
//   return {
//     cargo: data?.cargo,
//     isLoading,
//   };
// };
