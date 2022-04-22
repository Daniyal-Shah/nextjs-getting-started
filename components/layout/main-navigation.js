import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import classes from "./main-navigation.module.css";
import { useRouter } from "next/router";

function MainNavigation() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const signoutHandler = () => {
    router.replace("/");
    signOut();
  };

  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <div className={classes.logo}>Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul>
          {status === "unauthenticated" && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {status === "authenticated" && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {status !== "unauthenticated" && (
            <li>
              <button onClick={signoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
