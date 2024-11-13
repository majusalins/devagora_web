import { Request } from 'express';

export const flashErrors = (req, res, next) => {
  res.locals.session = req.session;
  const flashErrors: string[] = req.session.flashErrors;
  const old: string[] = req.session.old;

  if (flashErrors) {
    res.locals.flashErrors = flashErrors;
    req.session.flashErrors = null;
  }

  if (old) {
    res.locals.odd = old;
    req.session.odd = null;
  }

  next();
};

export const setFlashErrors = (
  req: Partial<Request>,
  errors: string[] | string,
) => {
  req.session['flashErrors'] = errors;
};

export const setOld = (req: Partial<Request>, old: any) => {
  req.session['old'] = old;
};
