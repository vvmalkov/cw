import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

const SECRET = 'my-secret';

@Injectable()
export class AuthService {
  login(name: string) {
    const token = jwt.sign({ name }, SECRET, { expiresIn: '1h' });
    return { token };
  }

  verify(token: string) {
    try {
      return jwt.verify(token, SECRET);
    } catch {
      throw new UnauthorizedException();
    }
  }
}
