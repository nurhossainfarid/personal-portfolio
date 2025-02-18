import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useGetAllContactListQuery } from "@/redux/features/contactlists/contactlist";
import { ContactList } from "@/types/global";

export default function Messages() {
  const { data } = useGetAllContactListQuery({});
  const messages = data?.data;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {messages?.map((msg: ContactList) => (
          <Card key={msg._id} className="shadow-md">
            <CardHeader>
              <CardTitle>{msg.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Email:</strong> {msg.email}
              </p>
              <p className="mt-2">{msg.message}</p>
              <Button className="mt-4">Reply</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
