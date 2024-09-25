import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { HomeService } from '../../home/service/home.service';
import { inject } from '@angular/core';
import { ErrorService } from '../services/error.service';


export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  const apikey: string = '62c41ce60162ebd1b09b2a679102fc95';
  const errorService = inject(ErrorService);

  const authApikey = req.clone({
    setParams: {
      apikey: apikey
    },
  });

  return next(authApikey).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        // Handle HTTP errors
        if (err.status === 409) {
          // Specific handling for unauthorized errors         
          errorService.showGenericError('Error', err.error.status);
          // You might trigger a re-authentication flow or redirect the user here
        } else {
          // Handle other HTTP error codes
          console.error('HTTP error:', err);
        }
      } else {
        // Handle non-HTTP errors
        console.error('An error occurred:', err);
      }

      // Re-throw the error to propagate it further
      return throwError(() => err); 
    })
  );
};
