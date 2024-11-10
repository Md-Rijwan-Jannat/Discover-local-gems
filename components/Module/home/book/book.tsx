'use client';

import Image from 'next/image';
import Container from '@/components/ui/container';
import { Select, SelectItem } from '@nextui-org/select';
import { DatePicker } from '@nextui-org/date-picker';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Card } from '@nextui-org/card';

interface BookConsultationProps {
  className?: string;
}

export default function BookConsultation({ className }: BookConsultationProps) {
  return (
    <Container>
      <div className={`grid gap-8 lg:grid-cols-2 mb-20 ${className}`}>
        {/* Left Side: Introduction and Image */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-2xl md:text-[48px] font-bold tracking-tight text-[#111827]">
            Book a Free Consultation
          </h1>
          <p className="text-[#111827CC] text-[20px]">
            Book a free consultation with our experts to explore strategies
            tailored to boost your online visibility and engagement.
          </p>
          <Image
            src="/homeImages/book/Group (1).png"
            alt="Consultation illustration"
            width={400}
            height={300}
            className="mx-auto"
            priority
          />
        </div>

        {/* Right Side: Form */}
        <Card className="bg-white rounded-lg p-5">
          <h3 className="text-xl font-bold text-[#111827]">
            Book Your Consultation Today
          </h3>
          <p className="text-[#111827CC] mb-4">
            Fill out the form below and we&apos;ll get back to you shortly.
          </p>
          <form className="space-y-4 roboto-regular">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Your Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full"
                variant="bordered"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full"
                variant="bordered"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Contact Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                variant="bordered"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="preferredTime" className="text-sm font-medium">
                Preferred Time
              </label>
              <Select
                id="preferredTime"
                placeholder="Select preferred time"
                variant="bordered"
                className="w-full"
              >
                <SelectItem key="morning">Morning (9AM - 12PM)</SelectItem>
                <SelectItem key="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                <SelectItem key="evening">Evening (4PM - 7PM)</SelectItem>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="preferredDate" className="text-sm font-medium">
                Preferred Date
              </label>
              <DatePicker
                id="preferredDate"
                variant="bordered"
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#205cb4] text-white rounded-[10px]"
            >
              Schedule Consultation
            </Button>
          </form>
        </Card>
      </div>
    </Container>
  );
}
