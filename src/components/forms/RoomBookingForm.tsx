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
import { rooms } from "@/lib/content";

/** Homestay booking request form. Delivery is wired up once the backend is enabled. */
export function RoomBookingForm({ defaultRoom }: { defaultRoom?: string }) {
  const [room, setRoom] = useState(defaultRoom ?? "");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.info("Booking request form is ready", {
      description:
        "Connect the backend to start receiving these requests. Until then, please reach us by phone.",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" htmlFor="stay-name" required>
          <Input id="stay-name" name="name" required placeholder="Your name" />
        </Field>
        <Field label="Phone" htmlFor="stay-phone" required>
          <Input id="stay-phone" name="phone" required type="tel" placeholder="10-digit number" />
        </Field>
        <Field label="Check-in" htmlFor="stay-in" required>
          <Input id="stay-in" name="checkIn" type="date" required />
        </Field>
        <Field label="Check-out" htmlFor="stay-out" required>
          <Input id="stay-out" name="checkOut" type="date" required />
        </Field>
        <Field label="Guests" htmlFor="stay-guests" required>
          <Input id="stay-guests" name="guests" type="number" min={1} required placeholder="e.g. 3" />
        </Field>
        <Field label="Preferred room" htmlFor="stay-room">
          <Select value={room} onValueChange={setRoom}>
            <SelectTrigger id="stay-room">
              <SelectValue placeholder="Any available room" />
            </SelectTrigger>
            <SelectContent>
              {rooms.map((r) => (
                <SelectItem key={r.slug} value={r.roomNumber}>
                  {r.roomNumber}
                </SelectItem>
              ))}
              <SelectItem value="Any available room">Any available room</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </div>

      <Field
        label="Notes"
        htmlFor="stay-notes"
        hint="Rates shown on the site are estimates — we confirm the final amount when we reply."
      >
        <Textarea
          id="stay-notes"
          name="notes"
          rows={5}
          placeholder="Arrival time, attending a function here, extra bedding…"
        />
      </Field>

      <FormNote />

      <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto">
        Send Booking Request
      </Button>
    </form>
  );
}
