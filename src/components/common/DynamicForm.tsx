// import {
//   FormControl,
//   FormHelperText,
//   Grid,
//   MenuItem,
//   OutlinedInput,
//   Select,
//   Stack,
//   Typography,
// } from '@mui/material';
// import React from 'react';
// import { useForm, SubmitHandler, Controller } from 'react-hook-form';
// import { MButton, MDatePicker } from '../mui_extend';

// export interface FormFieldType {
//   name: string;
//   label: string;
//   placeholder?: string;
//   type?: 'text' | 'file' | 'select' | 'date' | 'map';
//   options?: any[];
//   defaultValue?: string | number | boolean;
//   required?: boolean;
//   pattern?: {
//     value: RegExp;
//     message: string;
//   };
//   idKey?: string;
//   nameKey?: string;
//   gridSize?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
//   fileFormat?: string;
//   views?: ['year' | 'month' | 'day'];
// }

// interface DynamicFormProps {
//   fields: FormFieldType[];
//   onSubmit: SubmitHandler<Record<string, any>>;
//   onCancel: () => void;
//   isLoading?: boolean;
//   defaultValues?: any;
//   onFormChange?: (value: any) => void;
// }
// //=============================================================================//
// export function DynamicForm({
//   fields,
//   onSubmit,
//   isLoading,
//   defaultValues,
//   onCancel,
//   onFormChange,
// }: DynamicFormProps) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },

//     control,
//     watch,
//   } = useForm<Record<string, any>>({
//     defaultValues,
//   });
//   const formValues = watch();
//   React.useEffect(() => {
//     if (onFormChange) {
//       onFormChange(formValues); // ارسال تغییرات
//     }
//   }, [formValues, onFormChange]);

//   const renderField = (field: FormFieldType) => {
//     const {
//       type = 'text',
//       name,
//       label,
//       defaultValue,
//       options,
//       required = false,
//       pattern,
//       idKey = 'id',
//       nameKey = 'name',
//       fileFormat = '.pdf, .doc, .docx, .txt',
//       views,
//     } = field;
//     const isRequired = typeof required !== 'undefined';

//     switch (type) {
//       case 'select':
//         return (
//           <Controller
//             name={name}
//             control={control}
//             rules={{ required: 'This field is required' }}
//             render={({ field }) => (
//               <Select
//                 {...field}
//                 size="small"
//                 defaultValue={''}
//                 displayEmpty
//                 error={Boolean(errors[name])}
//               >
//                 <MenuItem value="" disabled>
//                   <em style={{ opacity: 0.5 }}>Select {label}</em>
//                 </MenuItem>
//                 {options?.map((option, index) => {
//                   const isString = typeof option === 'string';
//                   return (
//                     <MenuItem
//                       value={isString ? option : option[idKey]}
//                       key={index}
//                     >
//                       {isString ? option : option[nameKey]}
//                     </MenuItem>
//                   );
//                 })}
//               </Select>
//             )}
//           />
//         );
//       case 'file':
//         return (
//           <Controller
//             name={name}
//             control={control}
//             rules={{
//               required: required && {
//                 value: true,
//                 message: `${label} is required`,
//               },
//               pattern,
//             }}
//             render={({ field: { onChange, onBlur, ref, value } }) => (
//               <OutlinedInput
//                 size="small"
//                 readOnly
//                 type="file"
//                 inputProps={{
//                   accept: fileFormat,
//                 }}
//                 onChange={(e) => {
//                   const target = e.target as HTMLInputElement;
//                   onChange(target.files?.[0]);
//                 }}
//                 onBlur={onBlur}
//                 ref={ref}
//               />
//             )}
//           />
//         );

//       case 'date':
//         return (
//           <Controller
//             name={name}
//             control={control}
//             rules={{
//               required: required && {
//                 value: true,
//                 message: `${label} is required`,
//               },
//               pattern,
//             }}
//             render={({ field: { onChange, onBlur, ref, value } }) => (
//               <>
//                 <MDatePicker value={value} onChange={onChange} views={views} />
//               </>
//             )}
//           />
//         );
//       case 'map':
//         return (
//           <Controller
//             name={name}
//             control={control}
//             rules={{
//               required: required && {
//                 value: true,
//                 message: `${label} is required`,
//               },
//             }}
//             render={({ field: { onChange, value } }) => (
//               <GoogleMapsWrapper>
//                 <GoogleMap markerPosition={value} onMapClick={onChange} />
//               </GoogleMapsWrapper>
//             )}
//           />
//         );
//       case 'text':
//       default:
//         return (
//           <Controller
//             name={name}
//             control={control}
//             rules={{
//               required: required && {
//                 value: true,
//                 message: `${label} is required`,
//               },
//               pattern,
//             }}
//             render={({ field }) => (
//               <OutlinedInput
//                 size="small"
//                 error={Boolean(errors[name])}
//                 defaultValue={defaultValue}
//                 placeholder={`Enter ${label}`}
//                 {...field}
//               />
//             )}
//           />
//         );
//     }
//   };

//   return (
//     <>
//       <Grid container rowSpacing={1} columnSpacing={2}>
//         {fields.map((field) => (
//           <Grid item xs={12} md={field.gridSize ?? 4} key={field.name}>
//             <FormControl sx={{ mb: 2 }} fullWidth>
//               <Typography variant="subtitle2" color={'#49475A'} mb={0.5}>
//                 {field.label}
//               </Typography>
//               {renderField(field)}
//               {errors[field.name] && (
//                 <FormHelperText sx={{ color: '#DD331D' }}>
//                   {errors[field.name]?.message as string}
//                 </FormHelperText>
//               )}
//             </FormControl>
//           </Grid>
//         ))}
//       </Grid>
//       <Stack direction={'row'} justifyContent={'flex-end'} spacing={1}>
//         <MButton variant="outlined" color="inherit" onClick={() => onCancel()}>
//           Cancel
//         </MButton>
//         <MButton
//           variant="contained"
//           onClick={handleSubmit(onSubmit)}
//           isLoading={isLoading}
//         >
//           {defaultValues ? 'Update' : 'Add'}
//         </MButton>
//       </Stack>
//     </>
//   );
// }
