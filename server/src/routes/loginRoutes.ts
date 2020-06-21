import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Access denied');
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name='email'/>
    </div>
    <div>
      <label>Password</label>
      <input name='password' type='password'/>
    </div>
    <button type='submit'>Submit</button>
  </form>`);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 't@t.com' && password === 'pass') {
    // mark this person as logged in
    req.session = { loggedIn: true };
    // redirect them to the root rout
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`<div>
      <h1>You are logged in</h1>
      <a href='/logout'>Logout</a>
    </div>`);
  } else {
    res.send(`<div>
    <h1>You are not logged in</h1>
    <a href='/login'>Login</a>
  </div>`);
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = null;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to a top-secret route user!');
});

export { router };
