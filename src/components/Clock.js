import React, { useState } from "react";
import { motion } from "framer-motion";

function Clock() {
  const [time, setTime] = useState(new Date().toString());
  function showDate() {
    setTime(new Date().toString());
  }
  setInterval(showDate, 1000);
  return (
    <div className="clock">
      <motion.div initial={{ opacity: 0, y: 300 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2 }}>
        {time}
      </motion.div>
    </div>
  );
}

export default Clock;
