import { PageHeader } from "./common/pageHeader";

export function About() {
  return (
    <>
      <PageHeader
        title={
          <>
            About BizCards4U<span className="ltdSign">©</span>
          </>
        }
        description="Our Website specializes in creating Business Cards."
      />
      <p className="text-center">
        After signing up as a Business, you'll be able to create & share as many
        business cards as you wish.
      </p>
      <p className="text-center">
        You can find all the business cards you created under "My Cards".
      </p>
      <p className="text-center">
        There you would be able to create new cards, edit existing ones and
        delete the ones you didn't like.
      </p>
    </>
  );
}
