import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Vehicle } from '../data/vehicles';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface ReservationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vehicle: Vehicle;
}

export function ReservationDialog({ open, onOpenChange, vehicle }: ReservationDialogProps) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    message: '',
  });

  const depositAmount = Math.round(vehicle.price * 0.1); // 10% deposit

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      // If not logged in, close dialog and show login
      onOpenChange(false);
      alert('Please login to make a reservation');
      return;
    }

    // In production, this would submit to backend
    alert(`Reservation request submitted for ${vehicle.brand} ${vehicle.model}. Our team will contact you shortly.`);
    onOpenChange(false);
    navigate('/dashboard');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Reserve {vehicle.brand} {vehicle.model}</DialogTitle>
          <DialogDescription>
            Fill in your details to reserve this vehicle. A deposit of RM {depositAmount.toLocaleString()} is required.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+60 12-345 6789"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Notes (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Any specific requirements or questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
            />
          </div>

          <div className="bg-gray-50 p-4 rounded space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Vehicle Price</span>
              <span>RM {vehicle.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Deposit Required (10%)</span>
              <span className="text-red-600">RM {depositAmount.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500 pt-2">
              The deposit will be deducted from the total cost. Balance payment will be required before shipping.
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700">
              Submit Reservation
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
