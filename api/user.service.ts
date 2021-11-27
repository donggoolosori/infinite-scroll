import { getRepository } from 'typeorm';
import { User } from '../model/user';

class UserService {
  static async find(offset: number) {
    try {
      const userRepository = getRepository(User);
      const users = await userRepository.find({ take: 20, skip: offset });
      return users;
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserService;
