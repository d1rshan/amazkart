import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <div>
        <Button variant={"elevated"}>Click Me!</Button>
      </div>
      <div>
        <Input placeholder={"Enter here.."} />
      </div>
      <div>
        <Progress value={75} />
      </div>
      <div>
        <Textarea placeholder="Enter here..." />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
}
