import { PageHeader } from "./common/pageHeader";
import { useMyCards } from "../hooks/useMyCards";
import { Card } from "./card";
import { useAuth } from "../context/auth.context";
import { Link } from "react-router-dom";

export function Home() {
  const { user } = useAuth();
  const cards = useMyCards();

  return (
    <>
      <div className="d-flex align-content-center flex-column flex-fill flex-wrap justify-content-center">
        <PageHeader
          title={
            <>
              BizCards4U<span className="ltdSign">©</span>
            </>
          }
          description="The Place for your Business Cards!"
        />
        <div
          id="homeCards"
          className="row d-flex justify-content-center gap-2 my-4"
        >
          <h2 className="text-decoration-underline text-center">
            Your Recent Business Cards
          </h2>
          {!user || !user.biz ? (
            <div>
              <p className="text-center text-danger fw-bold fs-5">
                Unable to show any cards..
              </p>
              <p className="text-center text-danger fw-bold">
                You are NOT SIGNED IN to a BUSINESS ACCOUNT or you're NOT SIGNED
                IN AT ALL.
              </p>
              <p className="text-center text-danger fw-bold">
                Please SIGN UP as a BUSINESS to create, edit and view your
                cards..
              </p>
            </div>
          ) : !cards?.length ? (
            <p className="text-center fw-bold fs-5">
              No Cards Yet. Go to 'My Cards' Page and create some..
            </p>
          ) : (
            cards.toReversed().map((card, index) => {
              if (index <= 3) {
                return <Card key={card._id} card={card} />;
              }
              return null;
            })
          )}
          {user?.biz && (
            <>
              <p className="text-center fw-bold fs-5">
                Go to 'My Cards' Page to VIEW all your Cards, EDIT or DELETE
                them, and to CREATE new ones..
              </p>
              <Link className="text-center" to="/my-cards">
                <span className="btn btn-primary">to 'My Cards' Page..</span>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
