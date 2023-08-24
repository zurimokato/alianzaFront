export interface Page<T> {
    content: T[]; // Array que contiene los elementos en la página actual
    pageable: {
      sort: {
        sorted: boolean;
        unsorted: boolean;
      };
      offset: number;
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      unpaged: boolean;
    };
    totalPages: number; // Número total de páginas
    totalElements: number; // Total de elementos en todas las páginas
    last: boolean; // Indica si es la última página
    first: boolean; // Indica si es la primera página
    sort: {
      sorted: boolean;
      unsorted: boolean;
    };
    numberOfElements: number; // Número de elementos en la página actual
    size: number; // Tamaño de la página
    number: number; // Número de la página actual
    empty: boolean; // Indica si la página está vacía
  }