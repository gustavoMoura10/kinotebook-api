import { JwtPayloadInterface } from './jwt.payload.interface';

export interface CustomRequestInterface extends Request {
  user?: JwtPayloadInterface; // Adiciona a propriedade user
}
