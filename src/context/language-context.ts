// 'use client';

// import React, { createContext, useContext } from 'react';

// type LocaleContextType = {
//   locale: string;
// };

// const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

// export const useLocale = () => {
//   const context = useContext(LocaleContext);
//   if (!context) {
//     throw new Error('useLocale must be used within a LocaleProvider');
//   }
//   return context;
// };

// export const LocaleProvider = ({
//   locale,
//   children,
// }: {
//   locale: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <LocaleContext.Provider value={{ locale }}>
//       {children}
//     </LocaleContext.Provider>
//   );
// };
