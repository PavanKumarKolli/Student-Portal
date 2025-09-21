import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Logout.css"
const Logout = () => (
  <motion.div
    className="h-screen flex flex-col items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h1 className="text-2xl font-bold text-green-600">✅ You have successfully logged out!</h1>
    <Link
      to="/"
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Click here to Login Again
    </Link>
  </motion.div>
);

export default Logout;
