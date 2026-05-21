'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { locations } from '@/services/locations';

const AL_KHALEEJ_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1787!2d55.3195!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca7b1c4e4e5%3A0x1234567890abcdef!2sAl%20Khaleej%20Bldg!5e0!3m2!1sen!2sae!4v1234567890';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      // Simulate form submission - replace with your API/Formspree/etc.
      await new Promise((r) => setTimeout(r, 800));
      setIsSuccess(true);
      setFormState({ name: '', phone: '', email: '', company: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const dubaiOffice = locations.find((l) => l.id === 'dubai');

  return (
    <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
      {/* Left: Contact info + Map */}
      

      {/* Right: Contact Form */}
      <div className="glass-card">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="icon-box">
              <Icon icon="solar:check-circle-linear" width="32" strokeWidth="1.5" />
            </div>
            <h3 className="text-foreground text-xl font-semibold">
              Message sent successfully
            </h3>
            <p className="text-muted-foreground mt-2 text-sm">
              We&apos;ll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <FieldGroup>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field data-invalid={!!errors.name}>
                  <FieldLabel htmlFor="name" className="text-foreground text-sm font-medium">
                    Name
                  </FieldLabel>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formState.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <FieldError>{errors.name}</FieldError>}
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone" className="text-foreground text-sm font-medium">
                    Phone
                  </FieldLabel>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field data-invalid={!!errors.email}>
                  <FieldLabel htmlFor="email" className="text-foreground text-sm font-medium">
                    Email
                  </FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <FieldError>{errors.email}</FieldError>}
                </Field>
                <Field>
                  <FieldLabel htmlFor="company" className="text-foreground text-sm font-medium">
                    Company
                  </FieldLabel>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company"
                    value={formState.company}
                    onChange={handleChange}
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="subject" className="text-foreground text-sm font-medium">
                  Subject
                </FieldLabel>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleChange}
                />
              </Field>

              <Field data-invalid={!!errors.message}>
                <FieldLabel htmlFor="message" className="text-foreground text-sm font-medium">
                  Message
                </FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <FieldError>{errors.message}</FieldError>}
              </Field>
            </FieldGroup>

            <Button
              type="submit"
              disabled={isSubmitting}
              variant="default"
              className="w-full rounded-lg px-6 py-3 text-sm font-medium uppercase tracking-wide"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        )}
      </div>





      <div className="space-y-6">
 

        {dubaiOffice && (
          <div className="flex items-start gap-3">
            <div className="icon-box shrink-0">
              <Icon
                icon="solar:map-point-linear"
                width="20"
                height="20"
                strokeWidth="1.5"
              />
            </div>
            <div className="space-y-3">
              <p>{dubaiOffice.address}</p>
              <a
                href="tel:+97143368230"
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm"
              >
                <Icon icon="solar:phone-linear" width="16" strokeWidth="1.5" />
                +971 4 3368230
              </a>
              <a
                href="mailto:info@tawazon.ae"
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm"
              >
                <Icon icon="solar:letter-linear" width="16" strokeWidth="1.5" />
                info@tawazon.ae
              </a>
            </div>
          </div>
        )}

       
        <div className="border-border aspect-video w-full overflow-hidden rounded-lg border">
          <iframe
            src={AL_KHALEEJ_MAP_EMBED}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tawazon Dubai Office"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
