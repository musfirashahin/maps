import React from "react";

const messages = [
  {
    name: "Jessica Koel",
    message: "Hey Joel, I here to help you out please ...",
    time: "11:26",
    avatar: "https://i.pravatar.cc/40?img=1"
  },
  {
    name: "Komeial Bolger",
    message: "I will send you all documents as soon ...",
    time: "12:26",
    avatar: "https://i.pravatar.cc/40?img=2"
  },
  {
    name: "Tamaara Suiale",
    message: "Are you going to business trip next week",
    time: "8:26",
    avatar: "https://i.pravatar.cc/40?img=3"
  },
  {
    name: "Sam Nielson",
    message: "I suggest to start new business soon",
    time: "7:16",
    avatar: "https://i.pravatar.cc/40?img=4"
  },
  {
    name: "Caroline Nexon",
    message: "We need to start new research center.",
    time: "9:26",
    avatar: "https://i.pravatar.cc/40?img=5"
  },
  {
    name: "Patrick Koeler",
    message: "May be yes",
    time: "7:26",
    avatar: "https://i.pravatar.cc/40?img=6"
  }
];

export default function ChatList() {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        style={styles.search}
      />

      <div style={styles.list}>
        {messages.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.left}>
              <img src={item.avatar} alt="" style={styles.avatar} />
              <div>
                <div style={styles.name}>{item.name}</div>
                <div style={styles.message}>{item.message}</div>
              </div>
            </div>

            <div style={styles.right}>
              <span style={styles.time}>{item.time}</span>
              <span style={styles.star}>★</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "380px",
    padding: "20px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    fontFamily: "Arial"
  },
  search: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f7f7f7",
    padding: "12px",
    borderRadius: "10px"
  },
  left: {
    display: "flex",
    gap: "10px",
    alignItems: "center"
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%"
  },
  name: {
    fontWeight: "bold",
    fontSize: "14px"
  },
  message: {
    fontSize: "12px",
    color: "#555"
  },
  right: {
    textAlign: "right"
  },
  time: {
    fontSize: "12px",
    color: "#777"
  },
  star: {
    color: "green",
    fontSize: "18px",
    display: "block",
    marginTop: "4px"
  }
};