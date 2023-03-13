import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useGetAccountsQuery, useAddAccountMutation } from "./api/AdminSlice";
import { decrement, increment, incrementByAmount } from "./Redux/CounterSlice";

type Account = {
  id: number;
  amount: number;
};

const Counter = () => {
  const { isLoading, error, data } = useGetAccountsQuery(null);
  const [addAccount, { isLoading: pending, error: err, data: result }] =
    useAddAccountMutation();
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const [val, setVal] = useState<number>(0);

  const addUser = async () => {
    await addAccount({
      id: 12,
      amount: 9900,
    });

    
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <input
        style={{
          padding: "1rem",
        }}
        type="number"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setVal(+e.target.value)
        }
      />
      <br />
      <button onClick={() => dispatch(incrementByAmount(val))}>
        IncrementByAmount
      </button>
      {isLoading
        ? "Loading Please wait..."
        : error
        ? "Something went wrong please try again later"
        : data.map((account: Account) => (
            <div key={account?.id}>
              <h3>
                Id ={">"} {account?.id} : Amount : ={">"} {account?.amount}
              </h3>
            </div>
          ))}
      <button onClick={addUser}>Add user</button>
    </div>
  );
};

export default Counter;
