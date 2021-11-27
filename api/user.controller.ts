import express from 'express';
import UserService from './user.service';

class UserController {
  static async getUser(req: express.Request, res: express.Response) {
    const { offset } = req.params;
    try {
      const users = await UserService.find(+offset);
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserController;
