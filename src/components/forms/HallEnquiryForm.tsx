import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FormNote } from "./FormShell";
import { halls, occasionsList } from "@/lib/content";

/** Hall enquiry form. Submission delivery is wired up once the backend is enabled. */
export function HallEnquiryForm({ defaultHall }: { defaultHall?: string }) {
  const [hall, setHall] = useState(defaultHall ?? "");
  const [occasion, setOccasion] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.info("Enquiry form is ready", {
      description:
        "Connect the backend to start receiving these enquiries. Until then, please reach us by phone.",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="hall-name" required>
          <Input id="hall-name" name="name" required placeholder="Your name" />
        </Field>
        <Field label="Phone" htmlFor="hall-phone" required>
          <Input id="hall-phone" name="phone" required type="tel" placeholder="10-digit number" />
        </Field>
        <Field label="Email" htmlFor="hall-email">
          <Input id="hall-email" name="email" type="email" placeholder="Optional" />
        </Field>
        <Field label="Event date" htmlFor="hall-date" required>
          <Input id="hall-date" name="date" type="date" required />
        </Field>
        <Field label="Occasion" htmlFor="hall-occasion" required>
          <Select value={occasion} onValueChange={setOccasion} required>
            <SelectTrigger id="hall-occasion">
              <SelectValue placeholder="Select an occasion" />
            </SelectTrigger>
            <SelectContent>
              {occasionsList.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Preferred hall" htmlFor="hall-choice">
          <Select value={hall} onValueChange={setHall}>
            <SelectTrigger id="hall-choice">
              <SelectValue placeholder="No preference" />
            </SelectTrigger>
            <SelectContent>
              {halls.map((h) => (
                <SelectItem key={h.slug} value={h.name}>
                  {h.name}
                </SelectItem>
              ))}
              <SelectItem value="Not sure yet">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Expected guests" htmlFor="hall-guests" required>
          <Input id="hall-guests" name="guests" type="number" min={1} required placeholder="e.g. 150" />
        </Field>
        <Field label="Catering / dham needed" htmlFor="hall-catering">
          <Input id="hall-catering" name="catering" placeholder="Yes / No / Not sure" />
        </Field>
      </div>

      <Field label="Anything else we should know" htmlFor="hall-message">
        <Textarea
          id="hall-message"
          name="message"
          rows={5}
          placeholder="Timings, decoration ideas, number of rooms needed for guests…"
        />
      </Field>

      <FormNote />

      <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
        Send Enquiry
      </Button>
    </form>
  );
}
